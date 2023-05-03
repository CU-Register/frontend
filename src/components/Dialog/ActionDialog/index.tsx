import { Dialog, Transition } from '@headlessui/react'
import HorizontalDivider from 'components/Dividers/HorizontalDivider'
import VerticalDivider from 'components/Dividers/VerticalDivider'
import { FC, Fragment } from 'react'
import 'twin.macro'

interface IActionDialogProps {
  isOpen: boolean
  title?: string
  description: string
  onClose: () => void
  onConfirm?: () => void
  onReject?: () => void
}
const ActionDialog: FC<IActionDialogProps> = ({ isOpen, title, description, onClose, onConfirm, onReject }) => {
  return (
    <>
      {title && (
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={onClose}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                    <Dialog.Title tw="p-2 text-h1 font-h1 text-white text-center bg-cu-pink">{title}</Dialog.Title>
                    <Dialog.Description tw="mt-2 text-h2 font-h2 text-cu-grey flex justify-center  py-1">
                      {description}
                    </Dialog.Description>
                    <HorizontalDivider />
                    <div tw="flex">
                      <button tw="text-gray font-h2 text-h2 p-2" className="grow" type="button" onClick={onReject}>
                        ยกเลิก
                      </button>
                      <VerticalDivider />
                      <button tw="text-cu-pink font-h2 text-h2 p-2" className="grow" type="button" onClick={onConfirm}>
                        ตกลง
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </>
  )
}
export default ActionDialog
