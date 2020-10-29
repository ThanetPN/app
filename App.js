import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { AuthContext } from "./context";

import { SignIn } from './screen/SignIn ';
import { CreateAccount } from './screen/CreateAccount ';
import { Home } from './screen/Home ';
import { CreateShops } from './screen/shops/CreateShops';
import { Splash } from './screen/Splash ';
import { DetailShops } from './screen/shops/DetailShops';
import { CreateEvents } from './screen/shops/CreateEvents';
import { CheckDiscounts } from './screen/shops/CheckDiscounts';
import { ScanQRCode } from './screen/shops/ScanQRCode';
import { Customers } from './screen/customers/Customers';
import { ExchangePoints } from './screen/customers/ExchangePoints';
import { Spin } from './screen/customers/Spin';
import { CollectPoints } from './screen/customers/CollectPoints';
import { ShowResults } from './screen/customers/ShowResults';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: "App ShopJuice" }}
    />
    <AuthStack.Screen
      name="CreateAccount"
      component={CreateAccount}
      options={{ title: "Create Account" }}
    />
  </AuthStack.Navigator>
);
const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} options={{ title: "Create Account" }}/>
    
  </HomeStack.Navigator>
);

const CreateShopsStack = createStackNavigator();
const CreateShopsStackScreen = () => (
  <CreateShopsStack.Navigator>
    <CreateShopsStack.Screen name="CreateShops" component={CreateShops} />
  </CreateShopsStack.Navigator>
);

const DetailShopsStack = createStackNavigator();
const DetailShopsStackScreen = () => (
  <DetailShopsStack.Navigator>
    <DetailShopsStack.Screen name="DetailShops" component={DetailShops} />
  </DetailShopsStack.Navigator>
);

const CreateEventsStack = createStackNavigator();
const CreateEventsStackScreen = () => (
  <CreateEventsStack.Navigator>
    <CreateEventsStack.Screen name="CreateEvents" component={CreateEvents} />
  </CreateEventsStack.Navigator>
);

const CheckDiscountsStack = createStackNavigator();
const CheckDiscountsStackScreen = () => (
  <CheckDiscountsStack.Navigator>
    <CheckDiscountsStack.Screen name="CheckDiscounts" component={CheckDiscounts} />
  </CheckDiscountsStack.Navigator>
);

const ScanQRCodeStack = createStackNavigator();
const ScanQRCodeStackScreen = () => (
  <ScanQRCodeStack.Navigator>
    <ScanQRCodeStack.Screen name="ScanQRCode" component={ScanQRCode} />
  </ScanQRCodeStack.Navigator>
);

const CustomersStack = createStackNavigator();
const CustomersStackScreen = () => (
  <CustomersStack.Navigator>
    <CustomersStack.Screen name="Customers" component={Customers} />
  </CustomersStack.Navigator>
);

const ExchangePointsStack = createStackNavigator();
const ExchangePointsStackScreen = () => (
  <ExchangePointsStack.Navigator>
    <ExchangePointsStack.Screen name="ExchangePoints" component={ExchangePoints} />
  </ExchangePointsStack.Navigator>
);

const SpinStack = createStackNavigator();
const SpinStackScreen = () => (
  <SpinStack.Navigator>
    <SpinStack.Screen name="Spin" component={Spin} />
  </SpinStack.Navigator>
);

const CollectPointsStack = createStackNavigator();
const CollectPointsStackScreen = () => (
  <CollectPointsStack.Navigator>
    <CollectPointsStack.Screen name="CollectPoints" component={CollectPoints} />
  </CollectPointsStack.Navigator>
);

const ShowResultsStack = createStackNavigator();
const ShowResultsStackScreen = () => (
  <ShowResultsStack.Navigator>
    <ShowResultsStack.Screen name="ShowResults" component={ShowResults} />
  </ShowResultsStack.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={HomeStackScreen} />
    <Drawer.Screen name="CreateShops" component={CreateShopsStackScreen} />
    <Drawer.Screen name="DetailShops" component={DetailShopsStackScreen} />
    <Drawer.Screen name="CreateEvents" component={CreateEventsStackScreen} />
    <Drawer.Screen name="CheckDiscounts" component={CheckDiscountsStackScreen} />
    <Drawer.Screen name="ScanQRCode" component={ScanQRCodeStackScreen} />

    <Drawer.Screen name="Customers" component={CustomersStackScreen} />
    <Drawer.Screen name="ExchangePoints" component={ExchangePointsStackScreen} />
    <Drawer.Screen name="Spin" component={SpinStackScreen} />
    <Drawer.Screen name="CollectPoints" component={CollectPointsStackScreen} />
    <Drawer.Screen name="ShowResults" component={ShowResultsStackScreen} />
  </Drawer.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={DrawerScreen}
        options={{
          animationEnabled: false
        }}
      />
    ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{
            animationEnabled: false
          }}
        />
      )}
  </RootStack.Navigator>
);

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};