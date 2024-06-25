import { VariantProps, cva } from 'class-variance-authority';

const chipVariants = cva(
    'text-sm border rounded-full px-2.5 py - 0.5 hover:opacity-50 transition-opacity',
    {
        variants: {
            intent: {
                primary: 'bg-blue-500 border-blue-500 text-white',
                secondary: 'bg-gray-500 border-gray-500 text-white',
                danger: 'bg-red-500 border-red-500 text-white',
                warning: 'bg-yellow-500 border-yellow-500 text-white',
                info: 'bg-violet-500 border-violet-500 text-white',
                default: 'bg-white border-black text-black',
            },
        },
        compoundVariants: [],
        defaultVariants: {
            intent: 'default',
        },
    }
);

type ChipVariantsType = VariantProps<typeof chipVariants>;

// interface ChipProps {
//     label: string;
//     intent?: 'primary' | 'secondary' | 'danger' | 'warning' | 'info' | 'default';
// }
type ChipProps = {
    label: string;
} & ChipVariantsType;

function Chip({ label, intent }: ChipProps) {
    // chipVariants는 함수 (cva의 리턴값)
    return <div className={chipVariants({ intent })}>{label}</div>;
}

export default Chip;

// const colorClassName = clsx({
//     'bg-blue-500 border-blue-500 text-white': color === 'blue' && !outline,
//     'border-blue-500 text-blue-500': color === 'blue' && outline,
//     'bg-yellow-500 border-yellow-500 text-white': color === 'yellow',
// });
