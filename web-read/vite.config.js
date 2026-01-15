import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // 这里告诉打包工具，这些文件都要保留
        main: 'index.html',
        chapters: 'chapters.html',
        reader: 'reader.html',
        vocabulary: 'vocabulary.html',
        vocabularyIndex: 'vocabulary-index.html',
        stats: 'stats.html'
      }
    }
  }
})
