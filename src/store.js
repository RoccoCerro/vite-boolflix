import { reactive } from 'vue'

export const store = reactive({
  movie: {
    page: null,
    results: [],
    total_pages: null,
    total_results: null,
    query: ''
  },

  tv: {
    page: null,
    results: [],
    total_pages: null,
    total_results: null,
    query: ''
  }
})