import SearchAndQuery from 'components/ SearchAndQuery'
import { FilterRequestOption } from 'enums/Filters/RequestOption'
import { IRequestOption } from 'interfaces/RequestOption'
import mockRequestOptions from 'mocks/RequestOptions'
import { FC, useState } from 'react'

const SearchAndQuerySection: FC = () => {
  const [selectedRequestOptions, setSelectedRequestOptions] = useState<IRequestOption | null>(null)
  const [query, setQuery] = useState<string>('')
  const [selectedFilterRequestMethod, setSelectedFilterRequestMethod] = useState<FilterRequestOption>(
    FilterRequestOption.ALPHABETICAL,
  )

  const mockFilteredRequestOptions =
    query === ''
      ? mockRequestOptions
      : mockRequestOptions.filter((requestOption) => {
          return requestOption.requestName.includes(query)
        })

  return (
    <SearchAndQuery
      value={selectedRequestOptions}
      onChangeValue={setSelectedRequestOptions}
      onChangeInput={(event) => setQuery(event.target.value)}
      options={mockFilteredRequestOptions}
      filters={[
        {
          method: FilterRequestOption.ALPHABETICAL,
          onClick: () => setSelectedFilterRequestMethod(FilterRequestOption.ALPHABETICAL),
        },
        {
          method: FilterRequestOption.REQUEST_NUMBER,
          onClick: () => setSelectedFilterRequestMethod(FilterRequestOption.REQUEST_NUMBER),
        },
      ]}
      selectedFilter={selectedFilterRequestMethod}
    />
  )
}

export default SearchAndQuerySection
