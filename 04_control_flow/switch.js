// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const role = "editor";

switch (role) {
  case "admin":
    console.log("Full Access");
    break;
  case "editor":
    console.log("Edit Access");
    break;
  case "user":
    console.log("View Access");
    break;

  default:
    break;
}
