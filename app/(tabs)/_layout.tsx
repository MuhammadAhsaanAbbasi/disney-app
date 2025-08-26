import { TabsNav } from '@/constants';
import { images } from '@/constants/images';
import { Tabs } from 'expo-router';
import { ReactNode } from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';

const TabIcon = ({ focused, icon, title }: { focused: boolean; icon: any; title: string }) => {
    return focused ? (
        <ImageBackground source={images.highlight}
            className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
        >
            <Image source={icon} tintColor={"#151312"} className='size-5' />
            <Text className="text-secondary text-base font-semibold ml-2">
                {title}
            </Text>
        </ImageBackground>
    ) : (
        <View className="size-full justify-center items-center mt-4 rounded-full">
            <Image source={icon} tintColor="#A8B5DB" className="size-5" />
        </View>
    );
};


export default function TabsLayout({ children }: { children: ReactNode }) {
    return (
        <Tabs>
            {
                TabsNav.map((value, index) => (
                    <Tabs.Screen
                        key={value.name}
                        name={value.name}
                        options={{
                            title: value.title,
                            headerShown: false,
                            tabBarIcon: ({ focused }) => (
                                <TabIcon focused={focused} icon={value.icon} title={value.title} />
                            ),
                        }}
                    />
                ))
            }
        </Tabs>
    );
}
