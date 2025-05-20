gdjs.red_32light_32green_32light_32sceneCode = {};
gdjs.red_32light_32green_32light_32sceneCode.localVariables = [];
gdjs.red_32light_32green_32light_32sceneCode.GDGrassObjects1= [];
gdjs.red_32light_32green_32light_32sceneCode.GDGrassObjects2= [];
gdjs.red_32light_32green_32light_32sceneCode.GDGrassObjects3= [];
gdjs.red_32light_32green_32light_32sceneCode.GDplayer1Objects1= [];
gdjs.red_32light_32green_32light_32sceneCode.GDplayer1Objects2= [];
gdjs.red_32light_32green_32light_32sceneCode.GDplayer1Objects3= [];
gdjs.red_32light_32green_32light_32sceneCode.GDlightObjects1= [];
gdjs.red_32light_32green_32light_32sceneCode.GDlightObjects2= [];
gdjs.red_32light_32green_32light_32sceneCode.GDlightObjects3= [];
gdjs.red_32light_32green_32light_32sceneCode.GDGameInfoObjects1= [];
gdjs.red_32light_32green_32light_32sceneCode.GDGameInfoObjects2= [];
gdjs.red_32light_32green_32light_32sceneCode.GDGameInfoObjects3= [];
gdjs.red_32light_32green_32light_32sceneCode.GDbarrierObjects1= [];
gdjs.red_32light_32green_32light_32sceneCode.GDbarrierObjects2= [];
gdjs.red_32light_32green_32light_32sceneCode.GDbarrierObjects3= [];
gdjs.red_32light_32green_32light_32sceneCode.GDfinish_9595lineObjects1= [];
gdjs.red_32light_32green_32light_32sceneCode.GDfinish_9595lineObjects2= [];
gdjs.red_32light_32green_32light_32sceneCode.GDfinish_9595lineObjects3= [];
gdjs.red_32light_32green_32light_32sceneCode.GDgoObjects1= [];
gdjs.red_32light_32green_32light_32sceneCode.GDgoObjects2= [];
gdjs.red_32light_32green_32light_32sceneCode.GDgoObjects3= [];
gdjs.red_32light_32green_32light_32sceneCode.GDSkyBackgroundObjects1= [];
gdjs.red_32light_32green_32light_32sceneCode.GDSkyBackgroundObjects2= [];
gdjs.red_32light_32green_32light_32sceneCode.GDSkyBackgroundObjects3= [];
gdjs.red_32light_32green_32light_32sceneCode.GDAI_9595dummyObjects1= [];
gdjs.red_32light_32green_32light_32sceneCode.GDAI_9595dummyObjects2= [];
gdjs.red_32light_32green_32light_32sceneCode.GDAI_9595dummyObjects3= [];


gdjs.red_32light_32green_32light_32sceneCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.setCameraX(runtimeScene, 960, "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, 540, "", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.06, "", 0);
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(900);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(33);
}}

}


};gdjs.red_32light_32green_32light_32sceneCode.asyncCallback11087252 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.red_32light_32green_32light_32sceneCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("light"), gdjs.red_32light_32green_32light_32sceneCode.GDlightObjects3);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}{for(var i = 0, len = gdjs.red_32light_32green_32light_32sceneCode.GDlightObjects3.length ;i < len;++i) {
    gdjs.red_32light_32green_32light_32sceneCode.GDlightObjects3[i].setColor("red");
}
}gdjs.red_32light_32green_32light_32sceneCode.localVariables.length = 0;
}
gdjs.red_32light_32green_32light_32sceneCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.red_32light_32green_32light_32sceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(gdjs.randomInRange(1, 3.5)), (runtimeScene) => (gdjs.red_32light_32green_32light_32sceneCode.asyncCallback11087252(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.red_32light_32green_32light_32sceneCode.asyncCallback9869500 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.red_32light_32green_32light_32sceneCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("light"), gdjs.red_32light_32green_32light_32sceneCode.GDlightObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{for(var i = 0, len = gdjs.red_32light_32green_32light_32sceneCode.GDlightObjects2.length ;i < len;++i) {
    gdjs.red_32light_32green_32light_32sceneCode.GDlightObjects2[i].setColor("green");
}
}gdjs.red_32light_32green_32light_32sceneCode.localVariables.length = 0;
}
gdjs.red_32light_32green_32light_32sceneCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.red_32light_32green_32light_32sceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(gdjs.randomInRange(3, 5)), (runtimeScene) => (gdjs.red_32light_32green_32light_32sceneCode.asyncCallback9869500(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.red_32light_32green_32light_32sceneCode.eventsList3 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9909532);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "killdelay");
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("light"), gdjs.red_32light_32green_32light_32sceneCode.GDlightObjects2);
{for(var i = 0, len = gdjs.red_32light_32green_32light_32sceneCode.GDlightObjects2.length ;i < len;++i) {
    gdjs.red_32light_32green_32light_32sceneCode.GDlightObjects2[i].setColor("247;4;4");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("light"), gdjs.red_32light_32green_32light_32sceneCode.GDlightObjects2);
{for(var i = 0, len = gdjs.red_32light_32green_32light_32sceneCode.GDlightObjects2.length ;i < len;++i) {
    gdjs.red_32light_32green_32light_32sceneCode.GDlightObjects2[i].setColor("4;245;9");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11270860);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.red_32light_32green_32light_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10673476);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.red_32light_32green_32light_32sceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.red_32light_32green_32light_32sceneCode.mapOfGDgdjs_9546red_959532light_959532green_959532light_959532sceneCode_9546GDplayer1Objects2Objects = Hashtable.newFrom({"player1": gdjs.red_32light_32green_32light_32sceneCode.GDplayer1Objects2});
gdjs.red_32light_32green_32light_32sceneCode.mapOfGDgdjs_9546red_959532light_959532green_959532light_959532sceneCode_9546GDfinish_95959595lineObjects2Objects = Hashtable.newFrom({"finish_line": gdjs.red_32light_32green_32light_32sceneCode.GDfinish_9595lineObjects2});
gdjs.red_32light_32green_32light_32sceneCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player1"), gdjs.red_32light_32green_32light_32sceneCode.GDplayer1Objects2);
{for(var i = 0, len = gdjs.red_32light_32green_32light_32sceneCode.GDplayer1Objects2.length ;i < len;++i) {
    gdjs.red_32light_32green_32light_32sceneCode.GDplayer1Objects2[i].getBehavior("TopDownMovement").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player1"), gdjs.red_32light_32green_32light_32sceneCode.GDplayer1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "killdelay") > 0.438;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.red_32light_32green_32light_32sceneCode.GDplayer1Objects2.length;i<l;++i) {
    if ( gdjs.red_32light_32green_32light_32sceneCode.GDplayer1Objects2[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.red_32light_32green_32light_32sceneCode.GDplayer1Objects2[k] = gdjs.red_32light_32green_32light_32sceneCode.GDplayer1Objects2[i];
        ++k;
    }
}
gdjs.red_32light_32green_32light_32sceneCode.GDplayer1Objects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.red_32light_32green_32light_32sceneCode.GDplayer1Objects2 */
{for(var i = 0, len = gdjs.red_32light_32green_32light_32sceneCode.GDplayer1Objects2.length ;i < len;++i) {
    gdjs.red_32light_32green_32light_32sceneCode.GDplayer1Objects2[i].setPosition(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(),runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("finish_line"), gdjs.red_32light_32green_32light_32sceneCode.GDfinish_9595lineObjects2);
gdjs.copyArray(runtimeScene.getObjects("player1"), gdjs.red_32light_32green_32light_32sceneCode.GDplayer1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.red_32light_32green_32light_32sceneCode.mapOfGDgdjs_9546red_959532light_959532green_959532light_959532sceneCode_9546GDplayer1Objects2Objects, gdjs.red_32light_32green_32light_32sceneCode.mapOfGDgdjs_9546red_959532light_959532green_959532light_959532sceneCode_9546GDfinish_95959595lineObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "win scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("go"), gdjs.red_32light_32green_32light_32sceneCode.GDgoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.red_32light_32green_32light_32sceneCode.GDgoObjects1.length;i<l;++i) {
    if ( gdjs.red_32light_32green_32light_32sceneCode.GDgoObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.red_32light_32green_32light_32sceneCode.GDgoObjects1[k] = gdjs.red_32light_32green_32light_32sceneCode.GDgoObjects1[i];
        ++k;
    }
}
gdjs.red_32light_32green_32light_32sceneCode.GDgoObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player1"), gdjs.red_32light_32green_32light_32sceneCode.GDplayer1Objects1);
{for(var i = 0, len = gdjs.red_32light_32green_32light_32sceneCode.GDplayer1Objects1.length ;i < len;++i) {
    gdjs.red_32light_32green_32light_32sceneCode.GDplayer1Objects1[i].getBehavior("TopDownMovement").simulateRightKey();
}
}}

}


};gdjs.red_32light_32green_32light_32sceneCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("AI_dummy"), gdjs.red_32light_32green_32light_32sceneCode.GDAI_9595dummyObjects2);
{for(var i = 0, len = gdjs.red_32light_32green_32light_32sceneCode.GDAI_9595dummyObjects2.length ;i < len;++i) {
    gdjs.red_32light_32green_32light_32sceneCode.GDAI_9595dummyObjects2[i].getBehavior("TopDownMovement").simulateControl("Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AI_dummy"), gdjs.red_32light_32green_32light_32sceneCode.GDAI_9595dummyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.red_32light_32green_32light_32sceneCode.GDAI_9595dummyObjects1.length;i<l;++i) {
    if ( gdjs.red_32light_32green_32light_32sceneCode.GDAI_9595dummyObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.red_32light_32green_32light_32sceneCode.GDAI_9595dummyObjects1[k] = gdjs.red_32light_32green_32light_32sceneCode.GDAI_9595dummyObjects1[i];
        ++k;
    }
}
gdjs.red_32light_32green_32light_32sceneCode.GDAI_9595dummyObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "killdelay") > 0.438;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.red_32light_32green_32light_32sceneCode.GDAI_9595dummyObjects1 */
{for(var i = 0, len = gdjs.red_32light_32green_32light_32sceneCode.GDAI_9595dummyObjects1.length ;i < len;++i) {
    gdjs.red_32light_32green_32light_32sceneCode.GDAI_9595dummyObjects1[i].setPosition((runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()) - 120,runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}
}}

}


};gdjs.red_32light_32green_32light_32sceneCode.eventsList6 = function(runtimeScene) {

{


gdjs.red_32light_32green_32light_32sceneCode.eventsList0(runtimeScene);
}


{


gdjs.red_32light_32green_32light_32sceneCode.eventsList3(runtimeScene);
}


{


gdjs.red_32light_32green_32light_32sceneCode.eventsList4(runtimeScene);
}


{


gdjs.red_32light_32green_32light_32sceneCode.eventsList5(runtimeScene);
}


};

gdjs.red_32light_32green_32light_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.red_32light_32green_32light_32sceneCode.GDGrassObjects1.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDGrassObjects2.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDGrassObjects3.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDplayer1Objects1.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDplayer1Objects2.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDplayer1Objects3.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDlightObjects1.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDlightObjects2.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDlightObjects3.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDGameInfoObjects1.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDGameInfoObjects2.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDGameInfoObjects3.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDbarrierObjects1.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDbarrierObjects2.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDbarrierObjects3.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDfinish_9595lineObjects1.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDfinish_9595lineObjects2.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDfinish_9595lineObjects3.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDgoObjects1.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDgoObjects2.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDgoObjects3.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDSkyBackgroundObjects1.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDSkyBackgroundObjects2.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDSkyBackgroundObjects3.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDAI_9595dummyObjects1.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDAI_9595dummyObjects2.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDAI_9595dummyObjects3.length = 0;

gdjs.red_32light_32green_32light_32sceneCode.eventsList6(runtimeScene);
gdjs.red_32light_32green_32light_32sceneCode.GDGrassObjects1.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDGrassObjects2.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDGrassObjects3.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDplayer1Objects1.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDplayer1Objects2.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDplayer1Objects3.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDlightObjects1.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDlightObjects2.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDlightObjects3.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDGameInfoObjects1.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDGameInfoObjects2.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDGameInfoObjects3.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDbarrierObjects1.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDbarrierObjects2.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDbarrierObjects3.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDfinish_9595lineObjects1.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDfinish_9595lineObjects2.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDfinish_9595lineObjects3.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDgoObjects1.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDgoObjects2.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDgoObjects3.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDSkyBackgroundObjects1.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDSkyBackgroundObjects2.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDSkyBackgroundObjects3.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDAI_9595dummyObjects1.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDAI_9595dummyObjects2.length = 0;
gdjs.red_32light_32green_32light_32sceneCode.GDAI_9595dummyObjects3.length = 0;


return;

}

gdjs['red_32light_32green_32light_32sceneCode'] = gdjs.red_32light_32green_32light_32sceneCode;
