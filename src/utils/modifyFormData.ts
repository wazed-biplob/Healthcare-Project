export const modifyPayload = (data: any) => {
  const obj = { ...data };
  const file = obj["file"];
  delete obj["file"];

  const formData = new FormData();
  formData.append("data", JSON.stringify({ ...data }));
  formData.append("file", file as Blob);
  return formData;
};
