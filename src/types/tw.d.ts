import { TwComponent, TwComponentMap, TwFn } from 'twin.macro'

declare module 'react' {
  interface HTMLAttributes<T> {
    css?: TwFn | TwComponentMap | TwComponent
  }
}
