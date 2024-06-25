'use client';
import Button from './components/Button';

export default function Home() {
    return (
        <div className='h-screen flex flex-col items-center justify-center gap-y-4'>
            {/* Chip */}
            {/* <Chip label='chip' intent='primary' />
            <Chip label='chip' intent='secondary' />
            <Chip label='chip' intent='danger' />
            <Chip label='chip' intent='warning' />
            <Chip label='chip' intent='info' />
            <Chip label='chip' /> */}

            {/* Button */}
            <Button intent={'primary'} size='sm' onClick={() => alert('1')}>
                Primary
            </Button>
            <Button intent={'primary'} size='md'>
                Primary
            </Button>
            <Button intent={'primary'} size='lg'>
                Primary
            </Button>
            <Button intent={'primary'} size='lg' variant='outline'>
                Primary
            </Button>
            <Button intent={'secondary'} size='sm'>
                Secondary
            </Button>
            <Button intent={'secondary'} size='md'>
                Secondary
            </Button>
            <Button intent={'secondary'} size='lg'>
                Secondary
            </Button>
            <Button intent={'secondary'} size='lg' variant='outline'>
                Secondary
            </Button>
            <Button intent={'danger'} size='sm'>
                Danger
            </Button>
            <Button intent={'danger'} size='md'>
                Danger
            </Button>
            <Button intent={'danger'} size='lg'>
                Danger
            </Button>
            <Button intent={'danger'} size='lg' variant='outline'>
                Danger
            </Button>
        </div>
    );
}
