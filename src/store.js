import { reactive } from 'vue'

export const store = reactive({
  page: null,
	results: [],
  total_pages: null,
  total_results: null,
  query: ''
})