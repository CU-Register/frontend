import { Combobox } from '@headlessui/react'
import { FilterRequestMethod } from 'enums/FilterRequestMethod'
import { IRequestOptions } from 'interfaces/RequestOptions'
import mockRequestOptions from 'mocks/RequestOptions'
import { FC, useState } from 'react'
import tw from 'twin.macro'

const SearchAndQuerySection: FC = () => {
  const [selectedRequestOptions, setSelectedRequestOptions] = useState<IRequestOptions | null>(null)
  const [query, setQuery] = useState<string>('')
  const [selectedFilterRequestMethod, setSelectedFilterRequestMethod] = useState<FilterRequestMethod>(
    FilterRequestMethod.ALPHABETICAL,
  )

  const mockFilteredRequestOptions =
    query === ''
      ? mockRequestOptions
      : mockRequestOptions.filter((requestOption) => {
          return requestOption.requestName.includes(query)
        })

  return (
    <div tw="flex flex-col bg-cu-gold">
      <div tw="bg-cu-copper flex gap-5">
        <div tw="font-h2 text-h2 text-black min-w-[100px]">ค้นหาคำร้อง</div>
        <div tw="relative w-full">
          <Combobox value={selectedRequestOptions} onChange={setSelectedRequestOptions}>
            <Combobox.Input
              onChange={(event) => setQuery(event.target.value)}
              tw="w-full border border-black rounded-lg py-1 px-2"
              placeholder="ป้อนชื่อ คีย์เวิร์ดหรือหมายเลขของเอกสาร เช่น ลาออก 5 46 เป็นต้น"
            />
            <div tw="fixed">
              <Combobox.Options>
                <div css={[mockFilteredRequestOptions.length > 0 && tw`p-4 bg-white rounded-lg`]}>
                  {mockFilteredRequestOptions.length > 0 &&
                    mockFilteredRequestOptions.map((requestOption, index) => (
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
      <div tw="pl-[calc(100px + 1.25rem)] mt-5 bg-green-100 flex gap-4 items-center">
        <div tw="font-h2 text-h2 text-black">เรียงลำดับ:</div>
        <button
          css={[
            tw`bg-cu-pinkLd py-1 px-2 rounded-lg`,
            selectedFilterRequestMethod == FilterRequestMethod.ALPHABETICAL && tw`bg-cu-pink`,
          ]}
          onClick={() => setSelectedFilterRequestMethod(FilterRequestMethod.ALPHABETICAL)}
        >
          ตัวอักษร ก-ฮ
        </button>
        <button
          css={[
            tw`bg-cu-pinkLd py-1 px-2 rounded-lg`,
            selectedFilterRequestMethod == FilterRequestMethod.REQUEST_NUMBER && tw`bg-cu-pink`,
          ]}
          onClick={() => setSelectedFilterRequestMethod(FilterRequestMethod.REQUEST_NUMBER)}
        >
          ตัวเลขจท.
        </button>
      </div>
    </div>
  )
}

export default SearchAndQuerySection
