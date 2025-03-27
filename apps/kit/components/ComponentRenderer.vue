<script setup lang="ts">
import type { ComponentRendererProps } from "~/types/componentRenderer";

const props = defineProps<ComponentRendererProps>();
const resolvedComponent = shallowRef<any>(null);
const componentPropTypes = ref<Record<string, any>>({});
const editableProps = ref<Record<string, any>>({});
const modelValue = defineModel<unknown | undefined>({ default: undefined });

const importComponent = async () => {
  try {
    console.log(props.path);
    const component = await import(
      `~ui/components/UI/${props.path}/Input/${props.componentName}.vue`
    );
    resolvedComponent.value = component.default;

    if (component.default.props) {
      componentPropTypes.value = component.default.props;
      if (props.componentConfig) {
        const defaultValues = Object.entries(props.componentConfig).reduce(
          (acc, [key, config]) => {
            acc[key] = config.default;
            return acc;
          },
          {} as Record<string, any>
        );
        editableProps.value = { ...defaultValues };

        if (props.componentConfig.modelValue) {
          modelValue.value = props.componentConfig.modelValue.default;
        }
      } else {
        editableProps.value = {};
      }
    }
  } catch (error) {
    console.error(`Failed to load component: ${props.componentName}`, error);
    resolvedComponent.value = null;
  }
};

const componentProps = computed(() => {
  return { ...editableProps.value };
});

const updateProp = (propName: string, value: any) => {
  editableProps.value = { ...editableProps.value, [propName]: value };
};

const getUnionTypeOptions = (propConfig: any) => {
  if (Array.isArray(propConfig.type)) {
    return propConfig.type
      .map((t) => {
        if (!t) return null;
        return t.name || (typeof t === "string" ? t : null);
      })
      .filter(Boolean);
  }

  if (
    typeof propConfig.validator === "function" &&
    propConfig.__validatorSource
  ) {
    const source = propConfig.__validatorSource.toString();
    const match = source.match(/\[(.*)\]/);
    if (match) {
      try {
        return JSON.parse(`[${match[1]}]`);
      } catch (e) {
        return match[1]
          .split(",")
          .map((s) => s.trim().replace(/['"]/g, ""))
          .filter(Boolean);
      }
    }
  }

  return null;
};

onMounted(() => {
  importComponent();
});

// Add a watcher to reload the component when path or componentName changes
watch(
  () => [props.path, props.componentName],
  () => {
    importComponent();
  }
);
</script>

<template>
  <UIAtContainer class="py-8">
    <div>
      <div class="mb-8" v-if="resolvedComponent">
        <UIAtHeading
          size="h3"
          styleSize="h3"
          text="Component Props"
          fontStyle="display"
        />
        <div>
          <template v-if="componentConfig">
            <div
              v-for="(config, propName) in componentConfig"
              :key="propName"
              class="w-fit mb-4"
            >
              <UIAtInputCheckbox
                v-if="config.inputType === 'checkbox'"
                :id="`prop-${propName}`"
                :name="`prop-${propName}`"
                :label="propName"
                :value="editableProps[propName]"
                @update:modelValue="
                  updateProp(propName, !editableProps[propName])
                "
              />

              <input
                v-else-if="config.inputType === 'number'"
                type="number"
                :id="`prop-${propName}`"
                :value="editableProps[propName] ?? config.default"
                @input="updateProp(propName, Number($event.target.value))"
              />

              <UIAtInputSelect
                v-else-if="config.inputType === 'select' && config.options"
                :id="`prop-${propName}`"
                :name="`prop-${propName}`"
                :label="propName"
                :options="config.options"
                placeholder="Select an option..."
                v-model="editableProps[propName]"
              />

              <UIAtInputText
                v-else
                :id="`prop-${propName}`"
                :name="`prop-${propName}`"
                :label="propName"
                placeholder="Type here..."
                v-model="editableProps[propName]"
              />
            </div>
          </template>

          <template v-else-if="Object.keys(componentPropTypes).length">
            <div
              v-for="(propConfig, propName) in componentPropTypes"
              :key="propName"
              class="prop-field"
            >
              <label :for="`prop-${propName}`">{{ propName }}</label>

              <input
                v-if="propConfig.type === Boolean"
                type="checkbox"
                :id="`prop-${propName}`"
                :checked="editableProps[propName]"
                @change="updateProp(propName, $event.target.checked)"
              />

              <input
                v-else-if="propConfig.type === Number"
                type="number"
                :id="`prop-${propName}`"
                :value="editableProps[propName]"
                @input="updateProp(propName, Number($event.target.value))"
              />

              <select
                v-else-if="
                  Array.isArray(propConfig.validator) ||
                  propConfig.values ||
                  Array.isArray(propConfig.type) ||
                  getUnionTypeOptions(propConfig)
                "
                :id="`prop-${propName}`"
                :value="editableProps[propName]"
                @change="updateProp(propName, $event.target.value)"
              >
                <option
                  v-for="option in propConfig.validator ||
                  propConfig.values ||
                  getUnionTypeOptions(propConfig)"
                  :key="option"
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>

              <input
                v-else
                type="text"
                :id="`prop-${propName}`"
                :value="editableProps[propName]"
                @input="updateProp(propName, $event.target.value)"
              />
            </div>
          </template>
        </div>
      </div>
      {{ modelValue }}
      <component
        :is="resolvedComponent"
        v-bind="componentProps"
        :key="componentProps"
        v-if="resolvedComponent"
        v-model="modelValue"
      />
      <div v-else>
        <p>Failed to load component: {{ componentName }}</p>
      </div>
    </div>
  </UIAtContainer>
</template>
