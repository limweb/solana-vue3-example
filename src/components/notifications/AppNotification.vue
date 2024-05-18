<template>
    <teleport v-if="loaded" :to="teleport" :disabled="teleport === null">
        <div v-if="loaded" :class="classValue" @click.prevent="handleClick">
            <div v-if="icon" class="mr-2 text-lg">
                <slot name="icon"> ℹ️ </slot>
            </div>
            <p>
                <slot />
            </p>
        </div>
    </teleport>
</template>

<script setup>
import {computed, ref, watch} from 'vue';

const loaded = ref(false);
const timeoutClose = ref(null);

const emit = defineEmits(['click']);
const props = defineProps({
    variant: {
        type: String,
        default: 'primary',
        validator: (prop) =>
            [
                'primary',
                'secondary',
                'navy',
                'info',
                'success',
                'warning',
                'error',
            ].includes(prop),
    },
    icon: {
        type: Array,
        default: () => ['far', 'circle-xmark'],
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    timeout: {
        type: Number,
        default: 5000,
    },
    position: {
        type: Array,
        default: () => ['right', 'bottom'],
        validator: (prop) => {
            return (
                prop === null ||
                (prop.length === 2 &&
                    (prop.includes('top') || prop.includes('bottom')) &&
                    (prop.includes('left') || prop.includes('right')))
            );
        },
    },
});

const handleClick = (event) => {
    if (!props.disabled) {
        emit('click', event);
    }
};

const teleport = computed(() => {
    if (!props.position) return null;

    let teleportReturn = '#teleport-';

    if (props.position) {
        if (props.position.includes('top')) {
            teleportReturn += 'top-';
        } else if (props.position.includes('bottom')) {
            teleportReturn += 'bottom-';
        }

        if (props.position.includes('left')) {
            teleportReturn += 'left';
        } else if (props.position.includes('right')) {
            teleportReturn += 'right';
        }
    }

    return teleportReturn;
});

const classValue = computed(() => {
    let classReturn =
        'border cursor-default select-none text-xs rounded-xl flex items-center py-2 px-4 font-semibold bg-white min-w-[13.75rem] shadow-100 dark:bg-navy ';

    switch (props.variant) {
        case 'secondary':
            classReturn += 'text-secondary border-secondary ';
            break;

        case 'navy':
            classReturn +=
                'text-navy border-navy dark:text-white dark:border-white ';
            break;

        case 'info':
            classReturn += 'text-info border-info ';
            break;

        case 'success':
            classReturn += 'text-primary border-success ';
            break;

        case 'warning':
            classReturn += 'text-warning border-warning ';
            break;

        case 'error':
            classReturn += 'text-error border-error ';
            break;

        default:
            classReturn += 'text-primary border-primary ';
            break;
    }

    if (teleport.value) {
        classReturn += 'my-2.5 ';
    }

    return classReturn;
});

const openNotification = () => {
    loaded.value = true;
    if (teleport.value) {
        timeoutClose.value = setTimeout(() => {
            closeNotification();
        }, props.timeout);
    }
};
const closeNotification = () => {
    loaded.value = false;
};

defineExpose({openNotification});
</script>
