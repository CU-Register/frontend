import { Dialog, Transition } from '@headlessui/react'
import { FC, Fragment } from 'react'
import 'twin.macro'

interface IPDFPreviewDialogProps {
  isOpen: boolean
  title: string
  onClose: () => void
  onConfirm: () => void
  onReject: () => void
}

const PDFPreviewDialog: FC<IPDFPreviewDialogProps> = ({ isOpen, title, onClose, onConfirm, onReject }) => {
  return (
    <>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <Dialog.Title tw="py-2 px-3 text-h2 font-h2 text-white bg-cu-pink">{title}</Dialog.Title>
                  {/* <Dialog.Description tw="py-2 px-3 text-h2 font-h2 text-cu-pink ">{description}</Dialog.Description> */}
                  <div>pdf preview dialog</div>
                  <div tw="flex p-2 gap-2 justify-end">
                    <button tw="text-gray font-h2 text-h2 px-2 py-1 hover:text-black" onClick={onReject}>
                      ยกเลิก
                    </button>
                    <button tw="text-white bg-cu-pink font-h2 text-h2 px-2 py-1 rounded" onClick={onConfirm}>
                      ตกลง
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default PDFPreviewDialog
