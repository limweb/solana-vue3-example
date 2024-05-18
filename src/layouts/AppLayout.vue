<template>
    <main
        class="min-h-full font-base antialiased bg-background text-black dark:bg-dark-background dark:text-white transition-[padding]"
        :class="{
            dark: dark,
            'pl-sidebar': expanded,
            'pl-sidebar-small': !expanded,
        }"
    >
        <app-sidebar :expanded="expanded" />
        <slot />
        <div id="teleport-area" class="font-base antialiased">
            <div
                id="teleport-top-right"
                class="fixed top-0 right-0 mx-5 my-2.5"
            />
            <div
                id="teleport-top-left"
                class="fixed top-0 left-0 mx-5 my-2.5"
            />
            <div
                id="teleport-bottom-right"
                class="fixed bottom-0 right-0 mx-5 my-2.5"
            />
            <div
                id="teleport-bottom-left"
                class="fixed bottom-0 left-0 mx-5 my-2.5"
            />
        </div>
    </main>
</template>

<script setup>
import AppSidebar from '@components/sidebar/AppSidebar.vue';
import Settings from '../settings';
import {computed, onMounted, onUnmounted, provide, ref, watch} from 'vue';

const darkMode = localStorage.getItem('darkMode');
const dark = ref(darkMode === true || darkMode === 'true');
const expanded = ref(true);
const screenWidth = ref(window.innerWidth);
const screenSize = ref(null);

provide('sidebar-expanded', expanded);
provide('screenWidth', screenWidth);
provide('screenSize', screenSize);
provide('dark', dark);

onMounted(() => {
    setWidth();
    window.addEventListener('resize', setWidth);
});
onUnmounted(() => {
    window.removeEventListener('resize', setWidth);
});

watch(dark, () => {
    localStorage.setItem('darkMode', dark.value);
});

const setWidth = () => {
    const sizes = Object.keys(Settings.sizing);

    screenWidth.value = window.innerWidth;

    for (let index = sizes.length - 1; index >= 0; index--) {
        const size = sizes[index];
        const currentSize = Settings.sizing[size];

        if (screenWidth.value > currentSize) {
            screenSize.value = size;

            break;
        }
    }
};
</script>
