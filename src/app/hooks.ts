import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "./store"

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

/*
As we are using TypeScript, we export copies of the built-in useDispatch and useSelector hooks
annotated with TypeScript types. This saves us from having to declare the type every time
we import the hooks.
*/