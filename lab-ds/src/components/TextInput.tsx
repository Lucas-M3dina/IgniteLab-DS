import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode } from "react";


export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return(
    <div className='flex items-center gap-3 py-4 px-3 rounded h-12 bg-gray-800 focus-within:ring-2 ring-cyan-300'>
      {props.children}
    </div>
      
  )
}

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon(props : TextInputIconProps) {
  return(
    <Slot className="w-6 h-6 text-gray-400">
      {props.children}
    </Slot>
  )
}

function TextInputInput(props : TextInputProps) {

  return (
    <input className='bg-transparent flex-1 text-gray-100 text-xs outline-none placeholder:text-gray-400' {...props}/>
  )
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}