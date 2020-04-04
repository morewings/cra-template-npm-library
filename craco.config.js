module.exports = ({env}) => ({
  jest: {
    configure: {
      roots: ['<rootDir>/src', '<rootDir>/lib'],
      collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        'lib/**/*.{js,jsx,ts,tsx}',
        '!src/**/*.d.ts',
        '!lib/**/*.d.ts',
      ],
      testMatch: [
        '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
        '<rootDir>/lib/**/__tests__/**/*.{js,jsx,ts,tsx}',
        '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
        '<rootDir>/lib/**/*.{spec,test}.{js,jsx,ts,tsx}',
      ],
    },
  },
});
