export const accountInfoMapData = (record: any): any => {
  return {
    ...record,
    phoneNumber: record?.phone_number,
  }
}
