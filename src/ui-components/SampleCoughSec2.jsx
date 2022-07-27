/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function SampleCoughSec2(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="414px"
      height="896px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(40,111,107,1)"
      {...rest}
      {...getOverrideProps(overrides, "SampleCoughSec2")}
    >
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
          "Device/Device frame components58722784"
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
          "Device/Device frame components58722785"
        )}
      ></View>
      <Icon
        width="16px"
        height="16px"
        viewBox={{ minX: 0, minY: 0, width: 16, height: 16 }}
        paths={[
          {
            d: "M16 7L3.83 7L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9L16 9L16 7Z",
            fill: "rgba(255,255,255,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="7.7%"
        bottom="90.51%"
        left="5.8%"
        right="90.34%"
        {...getOverrideProps(overrides, "icon")}
      ></Icon>
      <Text
        fontFamily="Roboto"
        fontSize="22px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
        lineHeight="28px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="319px"
        position="absolute"
        top="112px"
        left="48px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Try coughing three times"
        {...getOverrideProps(overrides, "Try coughing three times")}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="13px"
        fontWeight="400"
        color="rgba(255,255,255,0.8)"
        lineHeight="16px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.25px"
        width="288px"
        position="absolute"
        top="151px"
        left="63px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="After hitting start button cough for 3 seconds"
        {...getOverrideProps(
          overrides,
          "After hitting start button cough for 3 seconds"
        )}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="343px"
        height="59px"
        position="absolute"
        top="550px"
        left="36px"
        {...getOverrideProps(overrides, "Group 2608536")}
      >
        <View
          width="343px"
          height="59px"
          position="absolute"
          top="0px"
          left="0px"
          transformOrigin="top left"
          transform="rotate(0deg)"
          boxShadow="0px 4px 8px rgba(0, 0, 0, 0.15000000596046448)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Large FAB")}
        ></View>
        <Text
          fontFamily="Roboto"
          fontSize="22px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="28px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="16px"
          left="145px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="00:02"
          {...getOverrideProps(overrides, "00:02")}
        ></Text>
        <View
          width="169px"
          height="59px"
          position="absolute"
          top="0px"
          left="0px"
          borderRadius="28px 0px 0px 28px"
          padding="0px 0px 0px 0px"
          backgroundImage="linear-gradient(0deg, rgba(242,100,64,1), rgba(242,100,64,0.32))"
          {...getOverrideProps(overrides, "Rectangle 386")}
        ></View>
      </View>
      <View
        width="340px"
        height="340px"
        position="absolute"
        top="186px"
        left="37px"
        boxShadow="0px 8px 12px rgba(0, 0, 0, 0.15000000596046448)"
        borderRadius="16px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,251,254,1)"
        {...getOverrideProps(overrides, "Elevation 5")}
      ></View>
      <Image
        width="536px"
        height="303px"
        position="absolute"
        top="224px"
        left="-61px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "51490492 1")}
      ></Image>
      <View
        padding="0px 0px 0px 0px"
        width="413px"
        height="237.8px"
        position="absolute"
        top="658.12px"
        left="1px"
        {...getOverrideProps(
          overrides,
          "VUI / Static / Attention State58722795"
        )}
      >
        <View
          padding="0px 0px 0px 0px"
          width="413px"
          height="237.8px"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(
            overrides,
            "VUI / Static / Attention State58722799"
          )}
        >
          <Image
            width="413px"
            height="237.8px"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "VUI State - Waiting 1")}
          ></Image>
        </View>
      </View>
    </View>
  );
}
