'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import useFinder from '@/zustand/finder';
import { useState } from 'react';

export default function Finder() {
  const finderOpen = useFinder((state) => state.isFinderOpen);
  const setFinderOpen = useFinder((state) => state.setFinderOpen);

  const [profileDialogOpen, setProfileDialogOpen] = useState(false);
  const [billingDialogOpen, setBillingDialogOpen] = useState(false);

  return (
    <>
      <DropdownMenu
        open={finderOpen}
        onOpenChange={setFinderOpen}
        modal={false}
      >
        <DropdownMenuTrigger asChild>
          <Button>Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side='bottom'
          sideOffset={12}
          align='end'
          alignOffset={12}
          className='rounded-none bg-foreground text-background'
        >
          <DropdownMenuItem
            onClick={() => setProfileDialogOpen(!profileDialogOpen)}
          >
            Profile
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog open={profileDialogOpen} onOpenChange={setProfileDialogOpen}>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when youre done.
            </DialogDescription>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'></div>
            <div className='grid grid-cols-4 items-center gap-4'></div>
          </div>
          <DialogFooter>
            <Button type='submit'>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={billingDialogOpen} onOpenChange={setBillingDialogOpen}>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Billing Information</DialogTitle>
            <DialogDescription>
              Update your billing details and payment method.
            </DialogDescription>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'></div>
            <div className='grid grid-cols-4 items-center gap-4'></div>
          </div>
          <DialogFooter>
            <Button type='submit'>Update Billing</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
