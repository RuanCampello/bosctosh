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
  const password = useFile((state) => state.password);
  const isPasswordOpen = useFile((state) => state.isPasswordOpen);
  const closePasswordModal = useFile((state) => state.closePasswordModal);
  const setPassword = useFile((state) => state.setPassword);
  const unlockFile = useFile((state) => state.unlockFile);
  const isLocked = useFile((state) => state.isLocked);
  const correctPassword = useFile((state) => state.correctPassword);

  function tryUnlockFile() {
    console.log(password, correctPassword);
    if (password === correctPassword) {
      unlockFile();
    }

    closePasswordModal();
  }

  return (
    <Dialog open={isPasswordOpen && isLocked} onOpenChange={closePasswordModal}>
      <DialogContent className='max-w-[40vw] h-fit select-none rounded-none bg-foreground border-4 border-background text-background font-chicago'>
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
            <Input
              id='password'
              onChange={(e) => setPassword(e.target.value)}
              className='col-span-4'
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type='button'
            onClick={tryUnlockFile}
            className='hover:bg-background/90 bg-background transition-colors duration-200 cursor-pointer'
          >
            Confirmar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
