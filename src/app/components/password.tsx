'use client';

import PasswordRequired from '@/assets/password-required.svg';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import useFile from '@/lib/zustand/file';
import Image from 'next/image';

export default function Password() {
  const isPasswordOpen = useFile((state) => state.isPasswordOpen);
  const closePasswordModal = useFile((state) => state.closePasswordModal);

  return (
    <Dialog open={isPasswordOpen} onOpenChange={closePasswordModal}>
      <DialogContent className='max-w-[40vw] rounded-none bg-foreground border-4 border-background text-background font-chicago'>
        <DialogHeader className='flex flex-col gap-4'>
          <DialogTitle className='flex gap-4 items-center text-[26px]'>
            <Image
              src={PasswordRequired}
              alt='password required'
              width={64}
              height={64}
            />
            Esse arquivo é protegido
          </DialogTitle>
          <DialogDescription className='text-base'>
            Entre a senha para acessar o arquivo.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-5 items-center gap-4'>
            <Label htmlFor='password' className='ms-auto'>
              Senha
            </Label>
            <Input id='password' className='col-span-4' />
          </div>
        </div>
        <DialogFooter>
          <Button type='submit'>Confirmar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
