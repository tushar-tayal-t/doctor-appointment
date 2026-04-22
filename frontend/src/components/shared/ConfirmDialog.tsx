"use client";

import type { FC } from "react";

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  onConfirm: () => void;
  onClose: () => void;
}

export const ConfirmDialog: FC<ConfirmDialogProps> = ({ open, title, onConfirm, onClose }) =>
  open ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-sm rounded-xl bg-white p-5">
        <h3 className="text-base font-semibold">{title}</h3>
        <div className="mt-4 flex justify-end gap-3">
          <button onClick={onClose} className="rounded-md border border-slate-300 px-3 py-2 text-sm">Cancel</button>
          <button onClick={onConfirm} className="rounded-md bg-[#185FA5] px-3 py-2 text-sm text-white">Confirm</button>
        </div>
      </div>
    </div>
  ) : null;
