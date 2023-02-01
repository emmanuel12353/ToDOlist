import React from 'react';
import  { Paystack }  from 'react-native-paystack-webview';
import { View } from 'react-native';

function PaymentScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Paystack 
      BottonText= "PAY NOW"
        paystackKey="sk_test_9e98d59491631dcde1db3627a464092cbfdf1fe2"
        paystackPublicKey="pk_test_b80d135c6264f9aea24e05f6187485a3f7f973dd"
        amount={1500.00}
        billingEmail="olubobokun98@gmail.com"
        activityIndicatorColor="green"
        onCancel={(e) => {
          alart('PAYMENT CANCELLED')
        }}
        onSuccess={(res) => {
          alart('PAYMENT SUCCESSFUL')
        }}
        autoStart={true}
      />
    </View>
  );
}
export default PaymentScreen;