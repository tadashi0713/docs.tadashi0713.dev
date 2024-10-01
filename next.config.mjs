import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

export default withNextra({
  output: 'standalone',
  webpack: (config) => {
    config.ignoreWarnings = [
      {
        module: /@typescript/,
        message: /Critical dependency: the request of a dependency is an expression/,
      },
    ]
    return config
  },
})
