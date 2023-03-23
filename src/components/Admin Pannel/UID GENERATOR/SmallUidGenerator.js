export const SmalluidGenerator = (length = 5) => {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let uid = "";
    for (let i = 0; i < length; i++) {
      uid += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  
    return uid;
  };