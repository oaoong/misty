import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'
import dts from 'rollup-plugin-dts'
import terser from '@rollup/plugin-terser'
import postcss from 'rollup-plugin-postcss'
import PeerDepsExternalPlugin from 'rollup-plugin-peer-deps-external'
import del from 'rollup-plugin-delete'
import packageJson from './package.json' assert { type: 'json' }

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    external: ['react-dom'],
    plugins: [
      resolve(),
      typescript({
        tsconfig: './tsconfig.build.json',
      }),
      json(),
      postcss(),
      terser(),
      PeerDepsExternalPlugin(),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts(), del({ hook: 'buildEnd', targets: './dist/esm/types' })],
    external: [/\.(sass|scss|css)$/],
  },
]
