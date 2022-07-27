/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function ThankYou(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="414px"
      height="896px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "ThankYou")}
    >
      <View
        width="280px"
        height="204px"
        position="absolute"
        top="346px"
        left="67px"
        boxShadow="0px 8px 12px rgba(0, 0, 0, 0.15000000596046448)"
        borderRadius="16px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,251,254,1)"
        {...getOverrideProps(overrides, "Elevation 7")}
      ></View>
      <Flex
        gap="286px"
        position="absolute"
        top="0px"
        left="1px"
        direction="row"
        width="412px"
        height="52px"
        justifyContent="space-between"
        alignItems="flex-end"
        overflow="hidden"
        padding="10px 24px 10px 24px"
        {...getOverrideProps(
          overrides,
          "Device/Device frame components58723101"
        )}
      ></Flex>
      <View
        width="412px"
        height="28px"
        position="absolute"
        top="868px"
        left="1px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(
          overrides,
          "Device/Device frame components58723102"
        )}
      ></View>
      <Text
        fontFamily="Roboto"
        fontSize="25px"
        fontWeight="400"
        color="rgba(255,255,255,0.8)"
        lineHeight="40px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="242px"
        position="absolute"
        top="388px"
        left="86px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Thankyou for providing us with your samples"
        {...getOverrideProps(
          overrides,
          "Thankyou for providing us with your samples"
        )}
      ></Text>
    </View>
  );
}
