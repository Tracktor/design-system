# [Versions](https://github.com/Tracktor/design-system/releases)

## v4.0.0
### 🎉 Major Updates
- **React 19** - Migration to React 19 with support for new features
- **Vite 7** - Upgrade to Vite 7 for improved build performance
- **MUI v7** - Migration to Material-UI v7 with latest improvements and optimizations

### ⚡ Breaking Changes
- **React**: Updated peer dependencies to support React ^17.0.0 || ^18.0.0 || ^19.0.0
- **MUI**: Updated dependencies to @mui/material ^7.0.0 (peer dependencies still support >=6.0.0 for compatibility)
- **TypeScript**: Updated to ^5.8.3 for better React 19 support
- **Vite**: Updated to exact version 7.0.0

### 🔧 Technical Improvements
- Improved build performance with Vite 7.0.0
- Enhanced TypeScript support with v5.8.3 for better React 19 compatibility
- Tree-shaking and bundling optimizations
- Updated development tools and testing libraries
- Maintained backward compatibility for React 17/18 in peer dependencies

### 📦 Dependencies
- `react`: ^19.0.0
- `react-dom`: ^19.0.0
- `@mui/material`: ^7.0.0
- `@emotion/react`: ^11.0.0
- `@emotion/styled`: ^11.0.0
- `vite`: 7.0.0
- `@vitejs/plugin-react`: ^4.3.3
- `typescript`: ^5.8.3

### 🚨 Migration Guide
To migrate to v4:

1. **Update dependencies**
   ```bash
   npm install @tracktor/design-system@^4.0.0
   npm install react@^19.0.0 react-dom@^19.0.0
   npm install @mui/material@^7.0.0
   ```

2. **Compatibility check**
    - Test components using deprecated React features
    - Verify MUI theme overrides for potential API changes
    - Update Vite to v7 in your projects

3. **Testing**
    - Run complete test suite
    - Verify visual rendering with Storybook/Chromatic

### 📝 Notes
This major version brings the latest innovations from the React/MUI ecosystem while maintaining design system API compatibility. Breaking changes primarily concern external dependency versions.
