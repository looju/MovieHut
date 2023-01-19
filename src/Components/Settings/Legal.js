import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

export const Legal = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.text}>
          All the information on this application is
          published in good faith and for general information purpose only.
          MovieHut does not make any warranties about the completeness,
          reliability and accuracy of this information. Any action you take upon
          the information you find on this application, is strictly at
          your own risk. MovieHut will not be liable for any losses and/or
          damages in connection with the use of our website. From our website,
          you can visit other websites by following hyperlinks to such external
          sites. While we strive to provide only quality links to useful and
          ethical websites, we have no control over the content and nature of
          these sites. These links to other websites do not imply a
          recommendation for all the content found on these sites. Site owners
          and content may change without notice and may occur before we have the
          opportunity to remove a link which may have gone 'bad'. Please be also
          aware that when you leave our website, other sites may have different
          privacy policies and terms which are beyond our control. Please be
          sure to check the Privacy Policies of these sites as well as their
          "Terms of Service" before engaging in any business or uploading any
          information. Consent By using our website, you hereby consent to our
          disclaimer and agree to its terms. Update Should we update, amend or
          make any changes to this document, those changes will be prominently
          posted here.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  text: {
    color: "#fff",
  },
  textView: {
    marginTop: 10,
  },
});
