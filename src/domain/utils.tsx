import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combina clases de manera condicional y resuelve conflictos de Tailwind
 * @param inputs Clases CSS que se quieren combinar
 * @returns String con las clases combinadas
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
