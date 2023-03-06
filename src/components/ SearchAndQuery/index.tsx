import { Combobox } from '@headlessui/react'
import { FilterRequest } from 'enums/Filters/Request'
import { FilterRequestOption } from 'enums/Filters/RequestOption'
import { IRequest } from 'interfaces/Request'
import { IRequestOption } from 'interfaces/RequestOption'
import { Dispatch, FC, SetStateAction } from 'react'
import tw from 'twin.macro'

interface ISearchAndQueryProps {
  value?: IRequestOption | IRequest | null
  onChangeValue?: Dispatch<SetStateAction<IRequestOption | null>> // test with setState of useState
  // onChangeValue?: () => void
  onChangeInput?: (event: React.ChangeEvent<HTMLInputElement>) => void
  options?: IRequestOption[] | IRequest[]
  filters?: { method: FilterRequestOption | FilterRequest; onClick: () => void }[]
  selectedFilter?: FilterRequestOption | FilterRequest
}
const SearchAndQuery: FC<ISearchAndQueryProps> = ({
  value,
  onChangeValue,
  onChangeInput,
  options,
  filters,
  selectedFilter,
}) => {
  return (
    <div tw="flex flex-col">
      <div tw="flex gap-5">
        <div tw="font-h2 text-h2 text-black min-w-[100px]">ค้นหาคำร้อง</div>
        <div tw="relative w-full">
          <Combobox value={value} onChange={onChangeValue}>
            <Combobox.Input
              onChange={onChangeInput}
              tw="w-full border border-black rounded-lg py-1 px-2"
              placeholder="ป้อนชื่อ คีย์เวิร์ดหรือหมายเลขของเอกสาร เช่น ลาออก 5 46 เป็นต้น"
            />
            <div tw="fixed">
              <Combobox.Options>
                <div css={[options && options.length > 0 && tw`p-4 bg-white rounded-lg`]}>
                  {options &&
                    options.length > 0 &&
                    options.map((requestOption, index) => (
                      <div key={index} tw="py-1">
                        <Combobox.Option key={requestOption.requestName} value={requestOption.requestName}>
                          {requestOption.requestName}
                        </Combobox.Option>
                      </div>
                    ))}
                </div>
              </Combobox.Options>
            </div>
          </Combobox>
        </div>
      </div>
      <div tw="pl-[calc(100px + 1.25rem)] mt-5 flex gap-4 items-center">
        <div tw="font-h2 text-h2 text-black">เรียงลำดับ:</div>
        {filters &&
          filters.map((filter, index) => {
            return (
              <button
                key={index}
                css={[tw`bg-cu-pinkLd py-1 px-2 rounded-lg`, selectedFilter == filter.method && tw`bg-cu-pink`]}
                onClick={filter.onClick}
              >
                {filter.method}
              </button>
            )
          })}
      </div>
    </div>
  )
}

export default SearchAndQuery
