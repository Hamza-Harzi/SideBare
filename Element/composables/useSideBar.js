import { ref } from "vue";
export default function useSidebar() {
  const showSidebar = ref(true);

  function toggleSidebar() {
    showSidebar.value = !showSidebar.value;
  }

  return {
    showSidebar,
    toggleSidebar,
  };
}
