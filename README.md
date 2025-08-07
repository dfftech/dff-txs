# DFF TypeScript Snippets (dff-txs)

A comprehensive VSCode extension providing TypeScript and React snippets for rapid development. This extension includes snippets for TypeScript, TypeScript React, and React Native development with a focus on modern patterns and best practices.

## Features

- **TypeScript Snippets**: Core TypeScript utilities and API calls
- **React TypeScript Snippets**: React components, pages, and hooks
- **React Native Snippets**: Mobile-specific components and utilities
- **Initialization Templates**: Complete entity setup with types, validation, and services

## Installation

1. Open VSCode
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "dff-txs"
4. Click Install

## DFF TypeScript Snippets - Complete Prefix Reference

| Prefix | Type | Description |
|--------|------|-------------|
| `dtlog` | typescript | console log |
| `dtrpc` | typescript | API post call |
| `dtrgc` | typescript | API Get call |
| `dtrdc` | typescript | API Delete call |
| `dtxrac` | typescript | Async function with loader, toast, and logging |
| `dtxrlc` | typescript | Async function with loader, toast, and logging |
| `dtxinittyp` | typescript | Generates a type and initial values for an entity |
| `dtxinitvalid` | typescript | Validation rules object for an entity |
| `dtxinitsrv` | typescript | Signal state and API methods for an entity |
| `dtxrinitgrid` | typescript | AG Grid configuration with columnDefs and getDataSource for an entity |
| `dxlog` | typescriptreact | console log |
| `dxpage` | typescriptreact | react page init |
| `dxrhf` | typescriptreact | react hook forms call |
| `dxtbtn` | typescriptreact | useMemo hook for button props |
| `dxtsbm` | typescriptreact | useMemo hook for submit button props |
| `dxtcal` | typescriptreact | useMemo hook for cancel button props |
| `dxtlmd` | typescriptreact | useMemo hook for TypeMarkdown/Field component props |
| `dxtsrc` | typescriptreact | useMemo hook for searchProps with onChange handler |
| `dxtfip` | typescriptreact | useMemo hook for Input props |
| `dxtotp` | typescriptreact | useMemo hook for OTP field props |
| `dxtdat` | typescriptreact | useMemo hook for date field |
| `dxtchb` | typescriptreact | useMemo hook for simple checkbox field |
| `dxtswt` | typescriptreact | useMemo hook for simple Switch field |
| `dxtlst` | typescriptreact | useMemo hook for select or multi-select List |
| `dxtlng` | typescriptreact | useMemo hook for language field |
| `dxtsel` | typescriptreact | useMemo hook for select |
| `dxttim` | typescriptreact | useMemo hook for time field |
| `dxtmdx` | typescriptreact | mark down edit |
| `dxtmdvprops` | typescriptreact | markdown viewer props |
| `dxrviewpage` | typescriptreact | Signal-based View Page with reload/edit/cancel logic |
| `dxrformpage` | typescriptreact | Form page for entity using react-hook-form and Preact signals |
| `dxrlistpage` | typescriptreact | List page with AG Grid, Search, and Add for signal-based entity |
| `dxrinitpage` | typescriptreact | Page component with list + drawer switching between Form and View |
| `dxinitscreen` | typescriptreact | Suspense-based page entry with permission check and fallback skeletons |

## Usage

1. Open a TypeScript (`.ts`) or TypeScript React (`.tsx`) file
2. Type any prefix from the table above
3. Press `Tab` or `Enter` to expand the snippet
4. Use `Tab` to navigate between placeholder variables
5. Customize the generated code as needed

## Snippet Categories

- **Basic TypeScript** (`dt*`): Core utilities, API calls, console logging
- **React Native TypeScript** (`dtx*`): Signal-based state management, async operations
- **React TypeScript** (`dx*`): React components, hooks, form handling
- **Initialization Templates** (`*init*`): Complete entity setups with types, validation, services, and pages



## Development Patterns

This extension promotes several development patterns:

- **Signal-based State Management**: Using `@preact/signals` for reactive state
- **Consistent Error Handling**: Standardized try-catch blocks with toast notifications
- **Loading States**: Built-in loading indicators for async operations
- **Internationalization**: Ready-to-use translation hooks (`useTranslation`)
- **Type Safety**: Strong TypeScript typing throughout

## File Organization

The snippets are organized by language and purpose:

- `typescript.code-snippets` - Core TypeScript utilities
- `typescript-rts.code-snippets` - React Native specific snippets
- `typescript-rts-init.code-snippets` - Initialization templates for entities
- `typescriptreact.code-snippets` - React component snippets
- `typescriptreact-init.code-snippets` - React page and component templates


## License

MIT License - see LICENSE file for details. any one can use it.

## Repository

[Azure DevOps Repository](https://dfftech@dev.azure.com/dfftech/dff-code/_git/dff-txs)

---

**Version**: 1.1.0
**Publisher**: dfftech
**Engine**: VSCode ^1.70.0