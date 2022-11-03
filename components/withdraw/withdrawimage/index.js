import React from "react";
import { View, Image } from "react-native";

import styles from "./style";

const WithdrawImage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/withdraw.png")}
        style={styles.transferimg}
      />
    </View>
  );
};

export default WithdrawImage;
