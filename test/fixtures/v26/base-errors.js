export function problems() {
  let neverAssigned;
  console.log(neverAssigned);
  let replaced = 1;
  replaced = 2;
  console.log(replaced);
  try {
    missingGlobal();
  } catch (error) {
    console.log(error);
    throw new Error("failed");
  }
  setTimeout("problems()", 0);
  return new Object();
}
