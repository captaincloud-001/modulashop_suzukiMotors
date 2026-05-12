module.exports = {
  ci: {
    collect: {
      staticDistDir: './shell-app/build',
      settings: {
        chromeFlags: '--no-sandbox --headless',
      },
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'categories:performance': 'off',
        'categories:accessibility': ['warn', { minScore: 0.5 }],
        'first-contentful-paint': 'off',
        'interactive': 'off',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};