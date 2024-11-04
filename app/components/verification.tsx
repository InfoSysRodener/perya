'use client';

import {
  Dialog,
  //   DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@radix-ui/react-dialog';
import { DialogHeader } from './ui/dialog';
import { useEffect, useState } from 'react';

const Verification = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    setIsDialogOpen(true);
  }, []);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Verification;
