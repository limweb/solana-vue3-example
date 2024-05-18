<template>
    <component
        :is="componentType"
        :class="classValue"
        @click.prevent="handleClick"
    >
        <div v-if="icon" class="mr-1 text-md">
            <slot name="icon">
                <font-awesome-icon :icon="icon" />
            </slot>
        </div>
        <span>
            <slot />
        </span>
    </component>
</template>

<script setup>
import {computed} from 'vue';

const emit = defineEmits(['click']);
const props = defineProps({
    variant: {
        type: String,
        default: 'primary',
        validator: (prop) =>
            ['primary', 'secondary', 'tertiary'].includes(prop),
    },
    href: {
        type: String,
        default: null,
    },
    icon: {
        type: Array,
        default: () => ['fas', 'plus'],
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    onClick: {
        type: Function,
        default: null,
    },
});

const handleClick = (event) => {
    if (!props.disabled) {
        emit('click', event);
    }
};

const componentType = computed(() => {
    if (props.href) {
        return 'a';
    }

    if (props.onClick) {
        return 'button';
    }

    return 'div';
});

const classValue = computed(() => {
    let classReturn =
        'text-lg rounded-lg border-2 transition-all font-bold px-3 py-[0.125rem] transform inline-flex items-center justify-center select-none ';
    const allowClick = componentType.value !== 'div' && !props.disabled;

    if (props.variant === 'secondary') {
        if (props.disabled) {
            classReturn += 'bg-white text-grey-400 border-grey-400 ';
        } else {
            classReturn += 'bg-white text-primary border-primary ';
            if (allowClick)
                classReturn +=
                    'hover:text-primary-dark  hover:border-primary-dark ';
        }
    } else if (props.variant === 'tertiary') {
        if (props.disabled) {
            classReturn += 'text-grey-400 border-transparent ';
        } else {
            classReturn += 'text-primary border-transparent ';
            if (allowClick) classReturn += 'hover:text-primary-dark ';
        }
    } else {
        if (props.disabled) {
            classReturn += 'bg-grey-400 text-white ';
        } else {
            classReturn += 'bg-primary text-white border-primary ';
            if (allowClick)
                classReturn +=
                    'hover:bg-primary-dark hover:border-primary-dark ';
        }
    }

    if (allowClick) {
        classReturn += 'cursor-pointer active:scale-[0.95] ';
    } else {
        if (props.disabled) {
            classReturn += ' cursor-not-allowed ';
        } else {
            classReturn += 'cursor-default ';
        }
    }

    return classReturn;
});
</script>
