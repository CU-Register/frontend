import SearchAndQuery from 'components/SearchAndQuery'
import { FilterRequest } from 'enums/Filters/Request'
import { IRequest } from 'interfaces/Request'

import mockRequests from 'mocks/Requests'
import { FC, useState } from 'react'

const SearchAndQuerySection: FC = () => {
  const [selectedRequest, setSelectedRequest] = useState<IRequest | null>(null)
  const [query, setQuery] = useState<string>('')
  const [selectedFilterRequest, setSelectedFilterRequest] = useState<FilterRequest>(FilterRequest.ALPHABETICAL)

  const mockFilteredRequests =
    query === ''
      ? mockRequests
      : mockRequests.filter((request) => {
          return request.requestName.includes(query)
        })

  return (
    <SearchAndQuery
      value={selectedRequest}
      onChangeValue={setSelectedRequest}
      onChangeInput={(event) => setQuery(event.target.value)}
      options={mockFilteredRequests}
      filters={[
        { method: FilterRequest.ALPHABETICAL, onClick: () => setSelectedFilterRequest(FilterRequest.ALPHABETICAL) },
        { method: FilterRequest.CREATED_AT, onClick: () => setSelectedFilterRequest(FilterRequest.CREATED_AT) },
        { method: FilterRequest.REQUEST_NUMBER, onClick: () => setSelectedFilterRequest(FilterRequest.REQUEST_NUMBER) },
        { method: FilterRequest.STATUS, onClick: () => setSelectedFilterRequest(FilterRequest.STATUS) },
      ]}
      selectedFilter={selectedFilterRequest}
    />
  )
}

export default SearchAndQuerySection
