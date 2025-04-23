import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ButtonT1 from '../Components/ButtonT1';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { action } from '@storybook/addon-actions';
import Cards from '../Components/Cards';

// Definición de meta para Storybook
const meta: Meta<typeof Cards> = {
  title: 'Components/Cards',
  component: Cards,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Card multifunction',
      },
    },
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Cards>;

// Historia básica
export const Default: Story = {
  args: {
    children: <>
     <div className=' block relative w-full '>
        <div className='grid gap-2'>
            <h2 style={{fontWeight:'700', fontSize:'14px', lineHeight: '100%', letterSpacing: '0px', paddingBottom:''}}>Sucursal principal</h2>
            <p style={{fontWeight:'400', fontSize: '12px', lineHeight: '100%', letterSpacing: '0%'}}>Esta sucursal es utilizada por T1 para descontar el  inventario de tus ventas de ecommerce</p>
        </div>
    </div>
    <Cards>
        <div className='block relative w-full '>
            <div className='grid gap-4'>
                <h2 style={{fontWeight:'700', fontSize:'14px', lineHeight: '100%', letterSpacing: '0px', paddingBottom:''}}>Almacén</h2>
                <div className='flex relative justify-between'>
                    <p style={{fontWeight:'400', fontSize: '12px', lineHeight: '100%', letterSpacing: '0%', width: '32px' }}>Lago Zurich 25, Ampliación granada, Miguel Hidalgo, 55110, CDMX, México.</p>
                    <ButtonT1
                        className=' font-[700] text-[14px]'
                        variant='text'
                    >
                        Botón
                    </ButtonT1>
                </div>
            </div>
        </div>
    </Cards>
    </>
  },
};
