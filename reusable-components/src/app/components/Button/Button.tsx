import { VariantProps, cva } from 'class-variance-authority';
import { ComponentProps, PropsWithChildren } from 'react';

const buttonVariant = cva(
    'border rounded font-semibold hover:brightness-90 active:brightness-75 transition',
    {
        variants: {
            intent: {
                primary: ' border-sky-500 text-white',
                secondary: ' border-slate-500 text-white',
                danger: ' border-red-500 text-white',
            },
            size: {
                sm: 'px-3 py-1 text-[13px]',
                md: 'px-4 py-1.5 text-[15px]',
                lg: 'px-5 py-2 text-[17px]',
            },
            variant: {
                outline: 'bg-white',
                contained: 'text-white',
            },
        },
        compoundVariants: [
            {
                intent: 'primary',
                variant: 'contained',
                className: 'bg-sky-500 ',
            },
            {
                intent: 'primary',
                variant: 'outline',
                className: ' text-sky-500',
            },
            {
                intent: 'secondary',
                variant: 'contained',
                className: 'bg-slate-500 ',
            },
            {
                intent: 'secondary',
                variant: 'outline',
                className: ' text-slate-500',
            },
            {
                intent: 'danger',
                variant: 'contained',
                className: 'bg-red-500 ',
            },
            {
                intent: 'danger',
                variant: 'outline',
                className: ' text-red-500',
            },
        ],
        defaultVariants: {
            intent: 'primary',
            size: 'md',
            variant: 'contained',
        },
    }
);

type ButtonVariant = VariantProps<typeof buttonVariant>;

// button의 타입을 연결해줌
// 1. 실제 컴포넌트의 타입 typeof Link
// 2. 문자열로 넣어주기
// ComponentProps<'button'> === DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type ButtonProps = {} & ButtonVariant & ComponentProps<'button'>;

// intent 바로 꺼낼 수 있는 이유 = ButtonVariant을 ButtonProps에 연결했기 때문에
function Button({
    intent,
    size,
    variant,
    children,
    // // button의 props를 가져와서 펼친다
    ...props
}: PropsWithChildren<ButtonProps>) {
    return (
        <button className={buttonVariant({ intent, size, variant })} {...props}>
            {children}
        </button>
    );
}

export default Button;
