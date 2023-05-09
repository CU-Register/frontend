import { Dialog, Transition } from '@headlessui/react'
import VerticalDivider from 'components/Dividers/VerticalDivider'
import { FC, Fragment } from 'react'
import 'twin.macro'

interface IPDFPreviewDialogProps {
  isOpen: boolean
  title: string
  onClose: () => void
  onConfirm: () => void
  onReject: () => void
  pdfUrl?: string | null
  isToForward?: boolean
  selectedTargetFullName?: string
}

const PDFPreviewDialog: FC<IPDFPreviewDialogProps> = ({
  isOpen,
  title,
  onClose,
  onConfirm,
  onReject,
  pdfUrl,
  isToForward = false,
  selectedTargetFullName,
}) => {
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
                <Dialog.Panel tw="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all h-[700px] flex flex-col">
                  <Dialog.Title tw="py-2 px-3 text-h2 font-h2 text-white bg-cu-pink text-center">{title}</Dialog.Title>
                  <div tw="flex h-full flex-col gap-3 py-4 px-12">
                    <div tw="flex-1 flex">
                      {pdfUrl && <object data={pdfUrl} type="application/pdf" tw="w-full h-full overflow-auto" />}
                    </div>
                    {isToForward && (
                      <div tw="flex justify-center items-center gap-2">
                        <div tw=" text-h2 font-h2 text-black">ส่งคำร้องต่อให้:</div>
                        <div tw="text-h2 font-h2">{selectedTargetFullName}</div>
                      </div>
                    )}
                    <div tw="flex p-2 gap-2 justify-center">
                      <button tw="text-gray font-h2 text-h2 px-2 py-1" onClick={onReject}>
                        ยกเลิก
                      </button>
                      <VerticalDivider />
                      <button tw="text-cu-pink font-h2 text-h2 px-2 py-1" onClick={onConfirm}>
                        ตกลง
                      </button>
                    </div>
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
