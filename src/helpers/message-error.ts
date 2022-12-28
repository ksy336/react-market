const getMessageFromError = (error: Error) => {
  if (error instanceof Error) return error.message

  return String(error);
}
export default getMessageFromError;