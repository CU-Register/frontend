import { Dialog, Transition } from '@headlessui/react'
import { IRequestOption } from 'interfaces/RequestOption'
import { FC, Fragment } from 'react'
import 'twin.macro'
/**
 * @todo update to generic interface at selectedValue param
 */
interface IActionDialogProps {
  isOpen: boolean
  selectedValue?: IRequestOption | null
  onClose: () => void
  onConfirm?: () => void
  onReject?: () => void
}
const ActionDialog: FC<IActionDialogProps> = ({ isOpen, onClose, selectedValue }) => {
  return (
    <>
      {selectedValue && (
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
                  <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                    <Dialog.Title tw="p-2 text-h1 font-h1 text-white flex justify-center bg-cu-pink">
                      {selectedValue.requestName}
                    </Dialog.Title>
                    <Dialog.Description tw="mt-2 text-h2 font-h2 text-cu-grey flex justify-center">
                      ยืนยันที่จะสร้างโครงร่างคำร้อง
                    </Dialog.Description>
                    <div tw="flex">
                      <button
                        tw="text-gray font-h2 text-h2 p-2"
                        className="grow"
                        type="button"
                        onClick={() => {
                          console.log('cancel')
                        }}
                      >
                        ยกเลิก
                      </button>
                      <button
                        tw="text-cu-pink font-h2 text-h2 p-2"
                        className="grow"
                        type="button"
                        onClick={() => {
                          console.log('confirm')
                        }}
                      >
                        ตกลง
                      </button>
                      {/* <VerticalDivider /> */}
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
