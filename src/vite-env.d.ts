/// <reference types="vite/client" />
export interface ProtectedRoutesProps {
    isAuthenticated: boolean;
    children?:ReactNode
}