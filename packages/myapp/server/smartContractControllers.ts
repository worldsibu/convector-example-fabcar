import { resolve } from "path";
import { SelfGenContext } from "./selfgenfabricontext";
import { CarControllerClient } from "car-cc/client";
import { FabricControllerAdapter } from '@worldsibu/convector-adapter-fabric';

export namespace CarController {
    export async function init(): Promise<CarControllerClient> {
        const user = process.env.USERCERT || 'user1';
        await SelfGenContext.getClient();
        // Inject a Adapter of type *Fabric Controller*
        // Setup accordingly to the
        const adapter = new FabricControllerAdapter({
            txTimeout: 300000,
            user: user,
            channel: process.env.CHANNEL,
            chaincode: process.env.CHAINCODE,
            keyStore: resolve(__dirname, process.env.KEYSTORE),
            networkProfile: resolve(__dirname, process.env.NETWORKPROFILE),
            userMspPath: resolve(__dirname, process.env.KEYSTORE),
        });
        await adapter.init();
        // Return your own implementation of the controller
        return new CarControllerClient(adapter);
    }
}