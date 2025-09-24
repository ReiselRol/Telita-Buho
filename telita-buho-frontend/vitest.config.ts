/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.ts',
        coverage: {
            provider: 'v8',
            include: ['src/**/*.{ts,tsx}'],
            exclude: [
                'src/types/**',
                'src/constants/**',
                '**/*.d.ts',
                'src/test-utils/**',
                'src/main.tsx',
            ],
        }
    },
})